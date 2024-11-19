import MyComponent from './classComponents/MyComponent .jsx';
import SayHello from './classComponents/SayHello.jsx';
import Counter from './classComponents/Counter.jsx';
import Greatings from './functionComponents/Greatings.jsx';
import Foo from './functionComponents/Foo.jsx';
import Card from './functionComponents/Card.jsx';


const About = () => {
    return (
        <>
            <MyComponent name="react" />
            <MyComponent name="class component" />
            <MyComponent name="javascript library" />
            <SayHello 
            name="james" 
            email="james@gamil.com" 
            jurusan="teknik informatika"
            />
            <SayHello
            name="sinta"
            email="sinta@gmail.com"
            jurusan="akuntansi"
            />
            <br/>
            <br/>
            <br/>
            <Counter />
            <br/>
            <br/>
            <br/>
            <Greatings />
            <br/>
            <br/>
            <br/>
            <Foo />
            <br/>
            <br/>
            <br/>
            <Card />
        </>
    );
};

export default About;