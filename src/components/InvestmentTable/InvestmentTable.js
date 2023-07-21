const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})


export const InvestmentTable = ({ data, initialInvestment }) => {
    console.log('data: ', data);
    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(yearData =>
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                            <td>{formatter.format(yearData.yearlyInterest)}</td>
                            <td>
                                {formatter.format(yearData.savingsEndOfYear -
                                    initialInvestment -
                                    yearData.yearlyContribution * yearData.year)
                                }
                            </td>
                            <td>
                                {   formatter.format(
                                    initialInvestment +
                                    yearData.yearlyContribution * yearData.year)
                                }
                            </td>
                        </tr>)
                }

            </tbody>
        </table>
    )
}