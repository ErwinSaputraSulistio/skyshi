export default function ActivityCard() {
    return(
        <div class="activity-card" data-cy="activity-item">
            <div class="activity-body">
                <span class="activity-item-title" data-cy="activity-item-title">New Activity</span>
            </div>
            <div class="card-footer">
                <span class="activity-item-date" data-cy="activity-item-date">26 Agustus 2022</span>
                <img 
                    alt="activity-item-delete-button"
                    class="activity-item-delete-button"
                    data-cy="activity-item-delete-button"
                    src="https://ivan-todo-devrank.netlify.app/static/media/icon-delete.1e080ddb.svg"
                />
            </div>
        </div>
    )
}