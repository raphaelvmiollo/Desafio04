import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}


interface DataTransation{
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.transactions.filter((x) => x.type === "income").reduce<number>((acc: number, currentValue: Transaction) => { return acc + currentValue.value}, 0);
    const outcome = this.transactions.filter((x) => x.type === "outcome").reduce<number>((acc: number, currentValue: Transaction) => { return acc + currentValue.value}, 0);
    const total = income - outcome;
    const balance:Balance = {income, outcome, total};
    return balance;
  }

  public create({title, value, type}: DataTransation): Transaction {
 
    const transaction = new Transaction({title, value, type});
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
