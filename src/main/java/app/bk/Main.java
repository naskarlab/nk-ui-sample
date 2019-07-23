package app.bk;

import java.net.URL;
import java.util.EnumSet;

import javax.servlet.DispatcherType;

import org.eclipse.jetty.http.HttpMethod;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.gzip.GzipHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.eclipse.jetty.util.resource.Resource;
import org.eclipse.jetty.webapp.WebAppContext;

import nk.bk.http.BusServer;
import nk.bk.http.CachingHttpHeadersFilter;
import nk.bk.http.RedirectJS;

public class Main {

	public static void main(String[] args) throws Exception {
		Integer port = 8080;
		
		String p = System.getenv("PORT");
		if(p != null && !p.equals("")) {
			port = Integer.parseInt(p);
			System.out.println("PORT = " + port);
		}
		
		Server server = new Server(port);

		URL url = Main.class.getResource("/webapp");
		System.out.println(url);
		
		WebAppContext ctx = new WebAppContext();
		// nolock files
		ctx.getInitParams().put("org.eclipse.jetty.servlet.Default.useFileMappedBuffer", "false");
		//
		ctx.setWelcomeFiles(new String[] { "index.html" });
		ctx.setContextPath("/");
		ctx.setBaseResource(Resource.newResource(url));
		
		
		GzipHandler gzipHandler = new GzipHandler();
		gzipHandler.setMinGzipSize(2048);
		gzipHandler.setCheckGzExists(false);
		gzipHandler.setCompressionLevel(-1);
        gzipHandler.setIncludedMethods(HttpMethod.GET.name(), HttpMethod.POST.name(), HttpMethod.PUT.name());
		ctx.setGzipHandler(gzipHandler);
		
		appendBus(ctx);
		appendRedirectJS(ctx);
		appendCache(ctx);
		
        server.setHandler(ctx);

		server.start();

		server.join();
	}
	
	private static void appendBus(WebAppContext ctx) {
		ServletHolder busServlet = ctx.addServlet(BusServer.class, "/bus/*");
		busServlet.setInitOrder(0);

		busServlet.setInitParameter("resolver", App.class.getCanonicalName());
	}

	private static void appendRedirectJS(WebAppContext ctx) {
		ctx.addFilter(RedirectJS.class, "/js/*", EnumSet.of(DispatcherType.REQUEST));
	}
	
	private static void appendCache(WebAppContext ctx) {
		ctx.addFilter(CachingHttpHeadersFilter.class, "*.js", EnumSet.of(DispatcherType.REQUEST));
		ctx.addFilter(CachingHttpHeadersFilter.class, "*.css", EnumSet.of(DispatcherType.REQUEST));
	}
	
}
