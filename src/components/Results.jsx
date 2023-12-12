import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({userInput}) {
  const annualData = calculateInvestmentResults(userInput);
  let totalInterest = 0;
  let totalCapital = userInput.initialInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investiment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData && annualData.map((item) => {
          totalInterest += item.interest;
          totalCapital += item.annualInvestment;
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalCapital)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
