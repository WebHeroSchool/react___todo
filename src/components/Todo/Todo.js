import React,{ useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
	const initialState = {
		
		thingToDo: JSON.parse(localStorage.getItem("thingToDo")) || [],
		count: JSON.parse(localStorage.getItem("count")) || 0,
		filter: 'Все',
	};

	const [thingToDo, setThingToDo] = useState(initialState.thingToDo);
	const [count, setCount] = useState(initialState.count);
	const [filter, setFilter] = useState(initialState.filter);

	useEffect(() => {
    localStorage.setItem("thingToDo", JSON.stringify(thingToDo));
    localStorage.setItem("count", JSON.stringify(count));
  }, [thingToDo,count]);
  

	const onClickDone = id => {
		const newItemList = thingToDo.map(item => {
			const newItem = { ...item };
			if (item.id === id) {
				newItem.done = !newItem.done;
				if (newItem.done) {
					setCount(count - 1);
				} else {
					setCount(count + 1);
				}
			};
			return newItem;
		});
		setThingToDo(newItemList);
	};

	const onClickDelete = (id, done) => {
		const newItemList = thingToDo.filter(item => item.id !== id);
		setThingToDo(newItemList);
		setCount((count) => count - 1);
	};

	const onClickAdd = task => {
		const newThingToDo = [
			...thingToDo,
			{
				task,
				done: false,
				id: Number(new Date())
			}
		];
		setThingToDo(newThingToDo);
		setCount((count) => count + 1);
	};

	const filterItems = () => {
    if(filter === 'Активные'){
      return thingToDo.filter(item => !item.done);
    }
    if(filter === 'Выполненые'){
      return thingToDo.filter(item => item.done);
    }
    return thingToDo; 
  };

  const onChangeFilter = (value) => {
    setFilter(value)
  };

  const onClickDeleteComplete = () => {
    const newThingToDo = thingToDo.filter(item => !item.done)
    setThingToDo(newThingToDo);
  };

	return (
		<div className={styles.wrap}>
	    <h1 className={styles.title}>Список дел:</h1>
	    <InputItem onClickAdd = {onClickAdd} thingToDo={thingToDo}/>
	    <ItemList 
	    	thingToDo = {thingToDo}
	    	onClickDone = {onClickDone} 
	    	onClickDelete = {onClickDelete} 
	    	filterItems={filterItems}
	    />
	    <Footer filter={filter} onChangeFilter={onChangeFilter} count = {count} onClickDeleteComplete={onClickDeleteComplete}/>
		</div>
	);
};

export default Todo;