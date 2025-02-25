/*   Milestone 1**
Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.
Milestone 2
Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.
BONUS
Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
Implementare la funzionalità di modifica del titolo di un post. */

import { useState } from "react"
const articles = [
  "5 Ricette Veloci per Una Cena Salutare e Gustosa",
  "Come Preparare il Pane Fatto in Casa: La Guida Definitiva",
  "Come Sfruttare al Meglio le Spezie in Cucina",
  "Dolci Senza Glutine: 7 Dessert Facili e Deliziosi"
]

function App() {
  /*array iniziale reattivo */
  const [title, setTitle] = useState('articles')
  /*articolo nuovo da aggiungere all'array iniziale */
  const [newTitle, setNewTitle] = useState('')

  const addTitle = (e) => {
    e.preventDefault()
    const article= newTitle.trim()
    setTitle( [...title, article] )
    setNewTitle('')
  }


  return (
    <>
    <div className="container">
      <h1>I nostri articoli</h1>
      
      <ul>
        {
          articles.map((article, index) => {
            return (
            <li key={index}>{article}</li>
          )
        })
        }
      </ul>

      {/*form per aggiungere un nuovo articolo */}
      <form onSubmit={addTitle}>
        <h4>Aggiungi il tuo articolo</h4>
        <input type="text"
         className="form-control" 
         placeholder="Aggiungi qui il tuo articolo"
          value={newTitle} 
          onChange={(e) => setNewTitle(e.target.value)}
          />
        <button>Aggiungi</button>
      </form>

      
    </div>
      
    </>
  )
}

export default App
