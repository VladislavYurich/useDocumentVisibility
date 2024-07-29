# useDocumentVisibility

### Install:
```javascript
npm i @vladsilav68/document-visibility
```

### Import:
```javascript
import useDocumentVisibility  from "@vladsilav68/document-visibility"
```

### For example:
```javascript
import { useEffect} from "react";
import useDocumentVisibility  from "@vladsilav68/document-visibility"

function App() {
    const { counter, visibility, visibilityChange } = useDocumentVisibility();

  useEffect(() => {
    visibilityChange ((isVisible) => {
      console.log('first handler', isVisible)
    });

    const unsubscribeSecondHandler = visibilityChange ((isVisible) => {
      console.log('second handler', isVisible)
    });

    setTimeout(() => unsubscribeSecondHandler(), 5000); // отписываемся от 'second handler' через 5 секунд
  }, [])

  return (
    <div>
      <span>
        Вы покинули страницу: {counter} раз
        Вкладка активна? {visibility ? 'ДА' : 'НЕТ'}
      </span>
    </div>
  );
  }
  
  export default App;
```

