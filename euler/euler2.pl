#!/usr/bin/perl 

use strict;
use warnings;

my $n0 = 1;
my $n1 = 1;
my $n2 = 0;

my $sum = 0;

do { 
   $n2 = $n1 + $n0;
   $n0 = $n1;
   $n1 = $n2;
   if ( $n2  % 2 == 0 ) {
   	$sum += $n2;
	warn $n2;
   }
}
while ( $n2 < 4000000 );

warn $sum;
