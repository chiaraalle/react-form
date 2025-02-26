/*   Milestone 1**
Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.
Milestone 2
Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.
BONUS
Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
Implementare la funzionalità di modifica del titolo di un post. */

import { useState, useEffect } from 'react';

const initialArticles = [
  "5 Ricette Veloci per Una Cena Salutare e Gustosa",
  "Come Preparare il Pane Fatto in Casa: La Guida Definitiva",
  "Come Sfruttare al Meglio le Spezie in Cucina",
  "Dolci Senza Glutine: 7 Dessert Facili e Deliziosi"
]

function App() {

  //l'array iniziale reattivo
  const [articles, setArticles] = useState(initialArticles);
  //Nuovo task da aggiungere all'array iniziale
  const [newArticle, setNewArticle] = useState('');
  //filtro di ricerca degli articoli
  const [search, setSearch] = useState('')
  const [filteredArticles, setFilteredArticles] = useState( articles )


  const addArticle = (e) => {
    e.preventDefault();
    const article = newArticle.trim();
    setArticles([...articles, article]);
    setNewArticles('');
  };

 //lo utilizzo per aggiornare la lista filtrata degli articoli ogni volta che cambia la ricerca (search).
  useEffect(() => {
    setFilteredArticles(
      articles.filter( article => {
        return article.toLowerCase().includes( search.toLowerCase() )
      })
    )
  }, [ search, articles ]) //questo array mi dice che ogni volta che search o articles cambia, lo useEffect verrà eseguito.

  //la funzione rimuove un articolo dall'array articles in base al suo indice
  const removeArticle = (articleIndex) => {
    
    const articlesAfterRemoval = articles.filter(
      (element, index) => index !== articleIndex
    );
    return setArticles(articlesAfterRemoval);
  };

  return (
    <>

      <div className="container">
        <h1>I nostri articoli</h1>

        <div>
          <input 
            type="text"
            className='form-control'
            placeholder='cerca articolo'
            value={search}
            onChange={ (e) => setSearch(e.target.value) }
          />
        </div>


        <ul className="list-group">
          {filteredArticles.map((filteredArticle, index) => {
            return (
              <li key={index} className="list-group-item">
                {filteredArticle}

                <button
                  className="btn-remove"
                  onClick={() => removeArticle(index)}
                >
                  X
                </button>
                
              </li>
            );
          })}
        </ul>

        {/* //form per il nuovo articolo */}
        <form onSubmit={addArticle}>
          <input
            type="text"
            className="form-control"
            placeholder="Scrivi qui il tuo articolo"
            value={newArticle}
            onChange={(e) => setNewArticle(e.target.value)}
          />

          <button className="btn-add">Aggiungi</button>
        </form>
      </div>
    </>
  );
}

export default App;