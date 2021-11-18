const AddTask = () => {
    return (
        <form className='add-form'>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder='Add Task' />
            </div>
            <div className="form-control">
                <label htmlFor="">Date</label>
                <input type="text" placeholder='Add a Date' />
            </div>
            <div className="form-control">
                <label htmlFor="">Reminder</label>
                <input type="checkbox" />
            </div>

            <input type="submit" value='Save Task' />
        </form>
    )
}

export default AddTask
