/*   Milestone 1**
Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.
Milestone 2
Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.
BONUS
Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
Implementare la funzionalità di modifica del titolo di un post. */

import { useState } from "react"
const articles = [
  {title:"5 Ricette Veloci per Una Cena Salutare e Gustosa"},
  {title:"Come Preparare il Pane Fatto in Casa: La Guida Definitiva"},
  {title:"Come Sfruttare al Meglio le Spezie in Cucina"},
  {title:"Dolci Senza Glutine: 7 Dessert Facili e Deliziosi"}
]

function App() {
  /*array iniziale reattivo */
  const [title, setTitle] = useState('articles')
  /*articolo nuovo da aggiungere all'array iniziale */
  const [newTitle, setNewTitle] = useState('')


  return (
    <>
    <div className="container">
      <h1>I nostri articoli</h1>
      <ul>
        {
          articles.map((article, index) => (
            <li key={index}>{article.title}</li>
          ))
        }
      </ul>

      
    </div>
      
    </>
  )
}

export default App
