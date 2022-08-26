export default function ActivityDetail() {
    const detail = []
    return(
        <>
            <div class="todo-header">
                <div class="todo-title">
                    <div class="icon-back" data-cy="todo-back-button"></div>
                    <span class="title-detail" data-cy="todo-title">New Activity</span>
                    <img
                        alt="todo-title-edit-button"
                        data-cy="todo-title-edit-button"
                        src="https://ivan-todo-devrank.netlify.app/static/media/icon-edit-h.c48dd33a.svg"
                    />
                </div>
                <button class="button add-button" data-cy="todo-add-button">
                    Tambah
                </button>
            </div>
            {
                detail.length === 0 ?
                <img 
                    alt="todo-empty-state"
                    data-cy="todo-empty-state"
                    src="https://ivan-todo-devrank.netlify.app/static/media/empty-item.a0b4b794.png"
                    style={{ height: "300px" }}
                />
                :
                <div class="dashboard-content">
                    { 
                        detail.map((item) => {
                            return null
                        }) 
                    }
                </div>
            }
        </>
    )
}