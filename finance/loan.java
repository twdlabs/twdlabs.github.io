

// CodeAssess Test

import java.util.Scanner;


public class money {
	public static void main (String[] args) throws java.lang.Exception {
		// Use the following code to fetch input from console 
		Scanner input = new Scanner(System.in); 
		int principal=200000, timeInYrs=30, compoundPeriodsPerYr=12;
		double rateAnnual=.04;

		System.out.println("");

		// Collect input
		
		System.out.println("Principal: "+principal);
		// principal = input.nextInt();
		System.out.println("\r(%): "+(100*rateAnnual)+"%");
		// rateAnnual = .01 * input.nextInt();
		System.out.println("\tt(yrs): "+timeInYrs);
		// timeInYrs = input.nextInt();

		System.out.println();

		int periods = compoundPeriodsPerYr*timeInYrs;
		double rateMonthly = rateAnnual/compoundPeriodsPerYr;
		// double monthlyPayment = principal*Math.pow(rateMonthly,periods) * (1-rateMonthly) / (1-Math.pow(rateMonthly,periods)) ;
		double xyz = Math.pow( (1+rateMonthly) , periods ) ;
		double monthlyPayment = principal*rateMonthly*xyz / (xyz - 1) ;

		System.out.print("\n: "+periods);
		System.out.println("\tm: "+monthlyPayment);

		System.out.println();

		double balance = principal;
		for(int i=1 ; i<=periods ; i++) {
			balance *= (1+rateMonthly);
			balance -= monthlyPayment;
			System.out.println("A("+i+"): "+balance);
		}
	}
}

