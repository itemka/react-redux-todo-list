import React from 'react';
import '../../../App.css';
import css from './TodoListFooter.module.css';
import button from './../../Button/Button.module.css';

class TodoListFooter extends React.Component {
    state = {
        isHidden: false
    };

    onAllFilterClick = () => this.props.changeFilter("All");
    onCompletedFilterClick = () => this.props.changeFilter("Completed");
    onActiveFilterClick = () => this.props.changeFilter("Active");
    onShowFiltersClick = () => this.setState({isHidden: true});
    onHideFiltersClick = () => this.setState({isHidden: false});

    render = () => {
        let classForAll = this.props.filterValue === "All" ? `${button.button} ${css.filterActive}` : `${button.button}`;
        let classForCompleted = this.props.filterValue === "Completed" ? `${button.button} ${css.filterActive}` : `${button.button}`;
        let classForActive = this.props.filterValue === "Active" ? `${button.button} ${css.filterActive}` : `${button.button}`;
        return (
            <div>
                {!this.state.isHidden && <div className={`center`}>
                    <button onClick={this.onAllFilterClick} className={classForAll}>All</button>
                    <button onClick={this.onCompletedFilterClick} className={classForCompleted}>Completed</button>
                    <button onClick={this.onActiveFilterClick} className={classForActive}>Active</button>
                </div>
                }
                {!this.state.isHidden && <span style={{color: `gold`}} onClick={this.onShowFiltersClick}>Hide</span>}
                {this.state.isHidden && <span style={{color: `gold`}} onClick={this.onHideFiltersClick}>Show</span>}
            </div>
        );
    }
}

export default TodoListFooter;