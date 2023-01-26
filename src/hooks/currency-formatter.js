function formatToCurrency(currency, amount){
    const formatted = (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
    return currency + formatted;
}

export default formatToCurrency