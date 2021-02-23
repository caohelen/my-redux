import React, {Component} from 'react';
import store from '../store/count'

export default class CreduxPage extends Component {
	componentWillMount() {
	}
	componentDidMount() {
		// store发生变化之后，执行subscribe的监听函数
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
	}
	componentWillUnmount() {
		if(this.unsubscribe) {
			this.unsubscribe()
		}
	}
	add = () => {
		store.dispatch({type: 'add'})
	}
	render() {
		return (
			<div>
				<div>
					{store.getState()}
				</div>
				<button onClick={this.add}>增加</button>
			</div>
		);
	}
}