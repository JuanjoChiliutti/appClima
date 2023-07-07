import { useState } from "react"
import '../styles/Searchbar.css'

function Searchbar({onSearch, setCity, setShow, setNotFound}) {
   const [search, setSearch]= useState('')

    function handleOnChange(event) {
        event.preventDefault()
        setSearch(event.target.value)
        setCity(search)
        setShow(false)
        setNotFound(false)

    }
    function handleSubmit(event) {
        event.preventDefault()
        onSearch(search)
        setShow(true)
        
    }

  return (
    <div className="searchbar">
        <form action="" onSubmit={handleSubmit} className="form">
            <label htmlFor=""className="localidad">Localidad</label>
            <input className="input-city" type="text" name="search" id="" placeholder="Buenos Aires, Barcelona, Paris..." value={search} onChange={handleOnChange} />
            <button className="btn-buscar">Buscar</button>
        </form>
    </div>
  )
}

export default Searchbar