const Header = () => {
    return <h1>Y2K Fashion</h1>;
  };

const Sidebar = () => {
    return (
    <div>
    <h3 className="side">sidebar</h3>
    </div>
    );
};

const Reviews = () => {
    return (
    <div>
    <h2 className="review">
        Reviews
    </h2>
    </div>
    );
};

const Rating = () => {
    return (
    <div>
       <h3 className="rate">Average Rating</h3>
    </div>
    );
};

const Analysis = () => {
    return (
        <div>
    <h3 className="analysis">Sentiment Analysis</h3> 
    
    </div> 
    );
};

const Visitors = () => {
    return (
    <div>
        <h4 className="visit">Visitor count</h4>
        </div>
        )
}



class App extends React.Component {
    render() {
        return (

            <div className="box">
            <Header />
            <Sidebar />
            <Reviews />
            <Rating /> 
            <Analysis />
            <Visitors /> 
            </div>
             );
         }
    }




ReactDOM.render(<App />, document.qetElementById('root'));