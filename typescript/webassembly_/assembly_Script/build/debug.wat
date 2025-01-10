(module
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (global $~lib/memory/__data_end i32 (i32.const 8))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 32776))
 (global $~lib/memory/__heap_base i32 (i32.const 32776))
 (memory $0 0)
 (table $0 1 1 funcref)
 (elem $0 (i32.const 1))
 (export "add" (func $assembly/index/add))
 (export "subtract" (func $assembly/index/subtract))
 (export "multiply" (func $assembly/index/multiply))
 (export "memory" (memory $0))
 (func $assembly/index/add (param $a i32) (param $b i32) (result i32)
  local.get $a
  local.get $b
  i32.add
  return
 )
 (func $assembly/index/subtract (param $a i32) (param $b i32) (result i32)
  local.get $a
  local.get $b
  i32.sub
  return
 )
 (func $assembly/index/multiply (param $a i32) (param $b i32) (result i32)
  local.get $a
  local.get $b
  i32.mul
  return
 )
)
