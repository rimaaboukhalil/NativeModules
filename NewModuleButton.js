import React from 'react';
import { NativeModules, Button } from 'react-native';
import { NativeEventEmitter, NativeModules } from 'react-native';

const { CalendarModule } = NativeModules;
//const { CalendarModule } = ReactNative.NativeModules;

const NewModuleButton = () => {
    const onSubmit = async () => {
      try {
        const eventId = await CalendarModule.createCalendarEvent(
          'Party',
          'My House'
        );
        console.log(`Created a new event with id ${eventId}`);
      } catch (e) {
        console.error(e);
      }
    };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onSubmit}
    />
  );
};

componentDidMount() {
   const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);
   this.eventListener = eventEmitter.addListener('EventReminder', (event) => {
      console.log(event.eventProperty) // "someValue"
   });
 }

 componentWillUnmount() {
   this.eventListener.remove(); //Removes the listener
 }

const { DEFAULT_EVENT_NAME } = CalendarModule.getConstants();
console.log(DEFAULT_EVENT_NAME);

export default NewModuleButton;