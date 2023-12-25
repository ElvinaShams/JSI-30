//  Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value
// (Привязать через bind, call, apply)

function logger() {
    console.log(`I output only external context: ${this.item}`);
  }
  const obj = { item: 'some value' };

  const boundLogger = logger.bind(obj)();
  const boundLogger1 = logger.call(obj);
  const boundLogge2 = logger.apply(obj); 
  
  //////////////////////////////////
  
  // Требуется создать функцию createCache, которая возвращает объект для кэширования результатов выполнения других функций. Кэш должен хранить значения, которые были возвращены функцией при определенных входных параметрах.
  
  // Функция createCache должна иметь два метода:
  
  // cache(fn): принимает функцию fn и возвращает новую функцию, которая кэширует результаты выполнения fn. Если кэш уже содержит результат для данного набора входных параметров, то новая функция должна возвращать сохраненное значение, не вызывая fn.
  // clear(): очищает весь кэш.

  function createCache() {
    var cache = {};
  
    function generateKey(args) {
      return JSON.stringify(args);
    }
  
    return {
      cache: function (fn) {
        return function (...args) {
          var key = generateKey(args);
  
          if (key in cache) {
            console.log(`Вывод: Выполнил: ${cache[key]} (значение взято из кэша)`);
            return cache[key];
          } else {
            var result = fn(...args);
            cache[key] = result;
            console.log(`Вывод: Выполнил: ${result}`);
            return result;
          }
        };
      },
      clear: function () {
        cache = {};
        console.log("Вывод: Кэш очищен");
      },
    };
  }
  
  var myCache = createCache();
  
  function multiplyByTwo(x) {
    return x * 2;
  }
  
  var cachedMultiplyByTwo = myCache.cache(multiplyByTwo);
  
  console.log(cachedMultiplyByTwo(5)); // Вывод: Выполнил: 10
  console.log(cachedMultiplyByTwo(5)); // Вывод: Выполнил: 10 (значение взято из кэша)
  
  console.log(cachedMultiplyByTwo(3)); // Вывод: Выполнил: 6
  console.log(cachedMultiplyByTwo(3)); // Вывод: Выполнил: 6 (значение взято из кэша)
  
  myCache.clear(); // Вывод : Кэш отчищен
  
  console.log(cachedMultiplyByTwo(5)); // Вывод: Выполнил: 10
  
  //////////////////////////////////////////
  
  // Бонус
  // Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()
  
  Function.prototype.myBind = function (context) {
    const fn = this;
    const args = Array.prototype.slice.call(arguments, 1);
    
        return function () {
          const boundArgs = Array.prototype.slice.call(arguments);
          return fn.apply(context, args.concat(boundArgs));
        };
      };
  
  //