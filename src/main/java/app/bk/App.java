package app.bk;

import java.util.HashMap;
import java.util.Map;

import app.bk.api.Api;
import app.bk.bn.srv.im.UserServiceImpl;
import app.ft.api.stub.UserServiceStub;
import nk.bk.http.PackageTranslateStubResolver;

public class App extends PackageTranslateStubResolver {
	
	public App() {
		super(Api.class.getPackage().getName());
		
		final Map<Class<?>, Object> services = new HashMap<>();
		
		services.put(UserServiceStub.class, new UserServiceImpl());
		
		setFactory(new Factory() {
		
			@SuppressWarnings("unchecked")
			@Override
			public <T> Instance<T> create(Class<T> clazz) {
				try {
					Object serviceImpl = services.get(clazz);
					if(serviceImpl == null) {
						return null;
					}
					
					Instance<T> i = new Instance<T>();
					i.clazzLookup = clazz.getInterfaces()[0];
					i.instance = (T) serviceImpl;
					
					return i;
					
				} catch(Exception e) {
					throw new RuntimeException(e);
					
				}
			}
			
		});
		
	}
	
}