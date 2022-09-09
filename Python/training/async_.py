#async
import asyncio

async def main():
    print('started')
    await asyncio.gather(
        foo(),
        foo(),
    )

async def foo():
    print('starting foo')
    await asyncio.sleep(0.00000000000000001) 
    print('foo finished.')
    '''
    Async-await Output:
      started
      starting foo (x2)
      (waiting for asyncio.sleep() amount of time (in seconds))
      foo finished. (x2)
    '''
start = time.time()
asyncio.run(main())
end = time.time()
print("async:",end - start,"seconds")

# synchronous
def main_():
    print('started')
    foo_()
    foo_()

def foo_():
    print('starting foo')
    time.sleep(0) 
    print('foo finished.')
    '''
    Async-await Output:
      started
      starting foo (x2)
      (waiting for asyncio.sleep() amount of time (in seconds))
      foo finished. (x2)
    '''
start = time.time()
(main_())
end = time.time()
print("sync:",end - start,"seconds")