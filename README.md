# React Native FlatList Performance Issue

This repository demonstrates a common performance issue encountered when using the `FlatList` component in React Native with large datasets. The app becomes unresponsive or crashes due to rendering too many items at once.

## Bug Description
The `FlatList` component renders all items simultaneously, leading to performance issues with large datasets. On lower-end devices, this is even more problematic, resulting in unresponsiveness and potential crashes.

## Solution
The solution involves implementing optimized rendering techniques using the `getItemLayout` and `initialNumToRender` props to improve performance and reduce initial render time.

## Setup

1. Clone the repository
2. `npm install` or `yarn install`
3. Run the project on an emulator or physical device.