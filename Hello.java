/*
Java can be writen using a NIO (nonblock io) library,
but in Java when you pause, it generally blocks (or waits).
*/
public class Hello{
	public static void main(String[] args) throws Exception{
		doCall();
		System.out.println("Hello ");
	}
	private static void doCall() throws Exception{
		Thread.sleep(4000);
		System.out.println("World ");
	}
}