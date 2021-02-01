# 26 - Pure Components
A pure component implments shouldComponentUpdate with a shallow prop and state comparison
sc of prevState with currentSTate 
sc of prevProps with currentProp 
Different => Re- Render component 

### Regular Component
 A regular component doest not implment the shouldComponentUpdate method. it always returns true by default 

 ### Pure Component 
 A pure component on the other hand implments shouldComponentUpdate with a shallow props ans state comparision.

 ### What is Shallow Comparison (SC )

 1. Primitive Types 
 A (SC)b returns true if a and b have the same value and are of the same type 
 ex: string 'Jagruti' (SC) string 'Jagruti' returns true 
 2. Complex Types
 a (SC) b returns true if a and b refrence the exact same object.

 ```
 var a = [1,2,3];
 var b = [1,2,3];
 var c = a; 
 var ab_eq = (a === b); // Shallow component returns false 
 var ac_eq = (a === c); // true they point to the same object 


 ```

  ```
 var a = {x:1 , y:2};
 var b = {x:1 , y:2};
 var c = a; 
 var ab_eq = (a === b); // Shallow component returns false 
 var ac_eq = (a === c); // true they point to the same object 
 

 ```

# Summury 

1. We can create a component by extending the PureComponent class. 
2. A PureCompoent implements the shouldComponentUpdate lifecycle method by performing a shallow comparision on the props and state of the component
3. If there is no difference, the component is not re-rendered - perfomance boost.
4. It is good idea to ensure that all the childrent componets are also pure to avoid unexpected behaviour.
4. Never mutate the state. Always return a new object that reflects the new state. 
 