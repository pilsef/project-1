import Navbar from "../../components/Navbar";

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <div className="jumbotron text-center">
                <div className="display-4">Contact Us</div>
                <p className="lead">A simple contact page</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <section>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci mollitia earum sunt illo magnam aliquam culpa molestias ipsum eaque libero? Veniam aperiam, itaque, fuga eligendi dolorem laudantium. Ex accusamus rerum nemo?
                            </p>
                        </section>
                        <form>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                            </div>
                            <div class="form-group">
                                <label for="msg">Message</label>
                                <textarea class="form-control" id="msg" rows="3"></textarea>
                            </div>
                            <a href="#" className="btn btn-primary">Contact Us</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;