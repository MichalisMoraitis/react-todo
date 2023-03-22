
function TodoTitle(props){
    const searchText = props.searchText;
    const title = props.title;

    const index = title.indexOf(searchText);
    const lengthOfTitle = title.length;
    const lengthOfSearchText = searchText.length;

    const span1 = title.slice(0,index);
    const span2 = title.slice(index,index+lengthOfSearchText);
    const span3 = title.slice(index+lengthOfSearchText,lengthOfTitle);

    const newTitle = [];
    newTitle.push(<span key={"1"}>{span1}</span>)
    newTitle.push(<span key={"2"} style={{backgroundColor: "#ced4da"}}>{span2}</span>)
    newTitle.push(<span key={"3"}>{span3}</span>)

    return (<>{newTitle} </>);
}

export default TodoTitle