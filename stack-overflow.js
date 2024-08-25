function show(count) {
  console.log(count);
  return show(count + 1);
}

show(0);
