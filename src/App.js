import './App.css';
import Services from './Services';

function App() {

    let serviceData = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTznzRPjH516JcINv0KIvgyxYXrt83CmOMgBx1Xt95P7VnNnogkXPxy8lXgyrQpnXZCQ4k&usqp=CAU",
            title: "First Heading",
            subtitle: "First Heading sub title",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        },

        {
            image: "https://laurnicoleblog.files.wordpress.com/2019/10/pexels-photo-255379.jpeg",
            title: "Second Heading",
            subtitle: "Second Heading sub title",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        },

        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTznzRPjH516JcINv0KIvgyxYXrt83CmOMgBx1Xt95P7VnNnogkXPxy8lXgyrQpnXZCQ4k&usqp=CAU",
            title: "Third Heading",
            subtitle: "Third Heading sub title",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        },

        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Fs4h80c0XSQirU0d3J9Cs0if-sQJnBH4xe5PaH2GVO95_n780-U57X1oEYVDVuLLAEc&usqp=CAU",
            title: "Fourth Heading",
            subtitle: "Fourth Heading sub title",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        },

        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTznzRPjH516JcINv0KIvgyxYXrt83CmOMgBx1Xt95P7VnNnogkXPxy8lXgyrQpnXZCQ4k&usqp=CAU",
            title: "Fifth Heading",
            subtitle: "Fifth Heading sub title",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        }
    ]

    return (
        <div className="App">

            
            <div className="container">
                <h1>All Services</h1>
                <div className="card-container">
                    {
                        serviceData.map((service,index)=>(

                            <Services key={index} title={service.title} subtitle={service.subtitle} description={service.description} image={service.image} />

                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
