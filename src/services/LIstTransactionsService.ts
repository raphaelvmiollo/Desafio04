import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';



class ListTransactionsService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(){
      return { 
          transactions: this.transactionsRepository.all(), 
          balance: this.transactionsRepository.getBalance()
        }         
  }
}


export default ListTransactionsService;