require(quantmod)

getSymbols("SP500",src="FRED")
SP500 <- na.omit(SP500[,1])
sp500.df <- data.frame(
  #pad date by  1000 * 60 * 60 or one hour so don't worry about rounding
  date=as.numeric(index(SP500))*24*60*60*1000 - 1000 * 60 * 60,
  sp500=as.vector(SP500[,1])
)
sink("sp500_fred.json")
cat(toJSON(sp500.df))
sink()
