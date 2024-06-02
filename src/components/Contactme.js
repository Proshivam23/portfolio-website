const Contactme = () => {
    return ( 
        <section id="contact" style={{ backgroundColor: 'rgb(30, 30, 30)'}} className="relative h-screen flex justify-center items-center flex-col">
            <div>
                <form className="flex flex-col">
                    <input type="email"></input>
                    <textarea type="text" className="w-1/2"></textarea>
                    <input type="submit" className="bg-orange-500 cursor-pointer" placeholder="Submit" ></input>
                </form>
            </div>
            <footer style={{ backgroundColor: 'rgb(23, 23, 23)'}} className="absolute w-full bottom-0 left-0 text-white text-2xl flex justify-center items-center ">
                <div className="">Made by SHIVAM RAIKAR</div>
            </footer>
        </section>
     );
}
 
export default Contactme;