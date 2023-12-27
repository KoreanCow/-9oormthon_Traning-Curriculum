import React from 'react'

export default function Form({
    title, setTitle,
    price, setPrice,
    edited, setEdited,
    handleSubmit }) {
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }

    if (edited) {
        return (
            <div>

            </div>
        )
    } else {
        <form>
            <input type='text' name='Title' placeholder='예) 렌트비' value={title} onChange={handleTitle}></input>
            <input type='number' name='Price' placeholder='0' value={price} onChange={handlePrice}></input>
            <button type='submit' onClick={handleSubmit}> 제출 </button>
        </form>
    }
    // return (
    //     <form>
    //         <input type='text' name='Title' placeholder='예) 렌트비' value={title} onChange={handleTitle}></input>
    //         <input type='number' name='Price' placeholder='0' value={price} onChange={handlePrice}></input>
    //         <button type='submit' onClick={handleSubmit}> 제출 </button>
    //     </form>
    // )

}
