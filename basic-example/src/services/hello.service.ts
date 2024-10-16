class HelloService {
  async hello() {
    console.log("Hello from server");
    return { hello: "World! (from server)" };
  }
}

const helloService = new HelloService();
export default helloService;
