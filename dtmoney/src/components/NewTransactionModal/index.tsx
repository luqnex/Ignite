import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useTransactions } from "../../hooks/useTransactions";

import { 
  Container,
  TransactionTypeContainer,
  RadioBox
} from "./styles";

import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import closeImg from "../../assets/Fechar.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose } : NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  const { createTransaction } = useTransactions()

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault()

    await createTransaction({
      title,
      amount, 
      category,
      type,
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar nova transação</h2>

        <input 
          placeholder="Titulo" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input 
          type="number" 
          placeholder="Valor" 
          value={amount}
          // e.target.value, só retorna string, mesmo quando o input é do tipo number
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            isActive={type === 'deposit'}
            onClick={() => { setType('deposit') }}
            activeColor="green" 
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"
            isActive={type === 'withdraw'}
            onClick={() => { setType('withdraw') }} 
            activeColor="red" 
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria" 
          value={category}
          onChange={(e) => setCategory(e.target.value)}  
        />

        <button type="submit">Cadastar</button>
      </Container>
    </Modal>
  );
}