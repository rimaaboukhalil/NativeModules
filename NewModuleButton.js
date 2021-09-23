import React, { useEffect } from 'react';
import { NativeEventEmitter, NativeModules, Button } from 'react-native';

const { CalendarModule } = NativeModules;
//const { CalendarModule } = ReactNative.NativeModules;

const { DEFAULT_EVENT_NAME } = CalendarModule.getConstants();
console.log(DEFAULT_EVENT_NAME);

const NewModuleButton = () => {
    useEffect(() => {
      const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);
      this.eventListener = eventEmitter.addListener('EventReminder', (event) => {
         console.log(event.eventProperty) // "someValue"
      });

      return () => this.eventListener.remove();
    });

    const onSubmit = async () => {
      try {
        console.log('Activity started');
        await NativeModules.ImagePickerModule.pickImage();
        console.log('Activity done');
      } catch (e) {
        console.log('Activity error');
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

export default NewModuleButton;