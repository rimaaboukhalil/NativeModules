package com.nativemodules;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import java.util.Map;
import java.util.HashMap;
import java.util.Timer;
import java.util.TimerTask;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

public class CalendarModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext context;

    CalendarModule(ReactApplicationContext context) {
        super(context);
        this.context = context;
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location, Promise promise) {
        try {
            Integer eventId = 1;

            new Timer().schedule(
                new TimerTask() {
                    @Override
                    public void run() {
                        WritableMap params = Arguments.createMap();
                        params.putString("eventProperty", "someValue");
                        sendEvent(context, "EventReminder", params);
                    }
                },
                10000
            );

            promise.resolve(eventId);
        } catch(Exception e) {
            promise.reject("Create Event Error", e);
        }
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("DEFAULT_EVENT_NAME", "New Event");
        return constants;
    }

    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}