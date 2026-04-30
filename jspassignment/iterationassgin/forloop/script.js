//  question n0.1--Print numbers from 1 to 5 using a for loop.

for( var i=1; i<=5; i++)
{
   console.log(i);
   console.log()
}

// question no.2 Print numbers from 1 to 10 using a for loop.
for( var i=1; i<=10; i++)
{
   console.log(i);
}

// question no.3 Print numbers from 10 to 1 (reverse counting),

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// question no.4  Print even numbers from 2 to 10.
for( let i=2; i<=10; i++)
{
   if(i%2==0)
   {
     console.log(i);
   }
}

// question no.5 Print odd numbers from 1 to 9,
for( let i=1; i<=10; i++)
{
   if(i%2 !==0)
   {
     console.log(i);
   }
}

// question no.6 Print thetable of 15 up to 10 steps.
for(let i=0; i<=10; i++)
{
    console.log(15*i);
}
//  question no. 7 Print numbers from 1 to 20 with increment of 2.
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// question no. 8 Print numbers from 5 to 50 with increment of 5.
for(let i=5; i<=50; i +=5 )
{
   console.log(i);
}

// question no. 9 Create a loop and print the square of numbers from 1 to 10.
for(let i=1; i<=10; i++)
{
   console.log(i*i);
}

//  question no.10 Print numbers from 1 to 10 that are divisible by 3.
 for( let i=1; i<=10; i++)
{
   if(i%3 ==0)
   {
     console.log(i);
   }
}