const CategoryCheck = ({name, id, For, label})=>{
    return(
        <div>
            <input 
                type='checkbox'
                name={name}
                id={id}>
            </input>
            <label
                for={For}
                className="ml-1"
            >{label}</label>
        </div>
    )
}

export default CategoryCheck