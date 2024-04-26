#!/bin/bash

base_dir="./src"

# Take input for filename
read -p "Enter the filename (default is sample): " filename
filename=${filename:-"sample"}

last_dir=$(ls -d "$base_dir"/Day* 2>/dev/null | sort -V | tail -n 1)
last_num=$(echo "$last_dir" | grep -o '[0-9]*$')
next_num=$((last_num + 1))

new_dir="Day$next_num"
mkdir -p "$base_dir/$new_dir"

touch "$base_dir/$new_dir/index.js" "$base_dir/$new_dir/$filename.js" "$base_dir/$new_dir/$filename.test.js"

echo """function $filename (params) {}

module.exports = $filename""" > "$base_dir/$new_dir/$filename.js"

echo """/* eslint-env jest */
/**
 */

const $filename = require('./$filename')

describe('$filename()', () => {
  test('Given "helloworld", should return "l"', () => {
    const given = ''
    const expected = ''

    const actual = $filename(given)
    expect(actual).toEqual(expected)
  })
})
""" >  "$base_dir/$new_dir/$filename.test.js"
