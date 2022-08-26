import Card from "../components/ActivityCard"

export default function ActivityList() {
    const list = [1]
    return(
        <>
            <div class="todo-header">
                <span class="activity-title" data-cy="activity-title">Activity</span>
                <button class="button add-button" data-cy="activity-add-button">
                    Tambah
                </button>
            </div>
            {
                list.length === 0 ?
                <img 
                    alt="activity-empty-state"
                    data-cy="activity-empty-state"
                    src="https://arifintahu-todo-devcode.vercel.app/assets/newactivity.9c2ae670.svg"
                    style={{ height: "300px" }}
                />
                :
                <div class="dashboard-content">
                    { 
                        list.map((item) => {
                            return <Card/>
                        }) 
                    }
                </div>
            }
        </>
    )
}