/**
 * Statement: Just shut the fuck up!In case you hadn’t noticed, I’m a bit of a stickler for terminology.You motherfucker!!!
 * 
 * Describe: The javascript boot file of second registration progress page ( ~/registration/index@3.html ).
 * 
 * Further changes, comments: ~
 * 
 * Docs: ~
 * 
 * Original Author: Tony ( Shen Weizhong ).
 * 
 * Version: 0.1.0
 * 
 * Creation Date: 2013.10.29 15:40 ( Tony ).
 * 
 * Last update: 2013.10.29 15:40 ( Tony ).
 * 
 * License: ~
 * 
 * Copyright: ~
 */

(function (window, document, requirejs, require) {
	
	'use strict';
	
	var boot = boot || {};
	
	boot.getAgent = function () {
		
		return navigator.userAgent.toLowerCase();
		
	};
	
	boot.isIE = function(userAgent) {
		
		var agent = userAgent || this.getAgent();
		
		return !!agent.match(/msie/i);
		
	};
	
	boot.isGteIE9 = function(userAgent) {
		
		var agent = userAgent || this.getAgent(),
			
			match = agent.match(/msie\D*([\.\d]*)/i),
			
			version = 0;
		
		if (match && match[1]) {
			
			version = match[1];
			
		}
		
		return version >= 9;
		
	};
	
	boot.req = function (jquery) {
		
		requirejs.config({
			
			baseUrl: '../CDN',
			
			enforceDefine: false,
			
			paths: {
				
				'jquery': jquery,
				
				'cdnjs': 'ajax/libs/js'
				
			},
			
			waitSeconds: 60,
			
			map: {
				
				'*': {'jquery': 'cdnjs/jquery_private/jquery.private.min'},
				
				'cdnjs/jquery_private/jquery.private.min': {'jquery': 'jquery'}
				
			}
			
		});
		
		require([
			
			'cdnjs/modernizr_amd/modernizr.min',
			
			'jquery',
			
			'cdnjs/jquery_cookie/1.3.1/jquery.cookie.min',
			
			'cdnjs/jquery_validation/1.11.1/jquery.validate.min',
			
			'cdnjs/gridder/0.1.0/gridder',
			
			'cdnjs/jquery_title_modify/title.modify'
		
		], function (modernizr, SJ, cookie, Hawaii, gridder, modifyTitle) {
			
			SJ(function ($) {

				/*
				+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
				88888888ba++++++++++++++++++++++++++++88+++++++++++++++++++88++++++888888888888+++++++++++++++++++++++++++++++++++++++++++++88b+++++++++++d88++++++++++++++++++++++++88++88+++++ad88++88+++++++++++++++++++++++88++
				88++++++"8b+++++++++++++++++++++++++++""+++++++++++++++++++88+++++++++++88++++++++++++++++++++++++++++++++++++++++++++++++++888b+++++++++d888++++++++++++++++++++++++88++""++++d8"++++""+++++++++++++++++++++++88++
				88++++++,8P++++++++++++++++++++++++++++++++++++++++++++++++88+++++++++++88++++++++++++++++++++++++++++++++++++++++++++++++++88`8b+++++++d8'88++++++++++++++++++++++++88++++++++88++++++++++++++++++++++++++++++88++
				88aaaaaa8P'+++,adPPYba,+++,adPPYb,d8++88++8b,dPPYba,+++++++88+++++++++++88++++++++,adPPYba,+++8b,dPPYba,+++8b+++++++d8++++++88+`8b+++++d8'+88+++,adPPYba,++++,adPPYb,88++88++MM88MMM++88+++,adPPYba,+++,adPPYb,88++
				88""""""8b,++a8P_____88++a8"++++`Y88++88++88P'+++`"8a+++++++++++++++++++88+++++++a8"+++++"8a++88P'+++`"8a++`8b+++++d8'++++++88++`8b+++d8'++88++a8"+++++"8a++a8"++++`Y88++88++++88+++++88++a8P_____88++a8"++++`Y88++
				88++++++`8b++8PP"""""""++8b+++++++88++88++88+++++++88++++++88+++++++++++88+++++++8b+++++++d8++88+++++++88+++`8b+++d8'+++++++88+++`8b+d8'+++88++8b+++++++d8++8b+++++++88++88++++88+++++88++8PP"""""""++8b+++++++88++
				88++++++a8P++"8b,+++,aa++"8a,+++,d88++88++88+++++++88++++++88+++++++++++88+++++++"8a,+++,a8"++88+++++++88++++`8b,d8'++++++++88++++`888'++++88++"8a,+++,a8"++"8a,+++,d88++88++++88+++++88++"8b,+++,aa++"8a,+++,d88++
				88888888P"++++`"Ybbd8"'+++`"YbbdP"Y8++88++88+++++++88++++++88+++++++++++88++++++++`"YbbdP"'+++88+++++++88++++++Y88'+++++++++88+++++`8'+++++88+++`"YbbdP"'++++`"8bbdP"Y8++88++++88+++++88+++`"Ybbd8"'+++`"8bbdP"Y8++
				++++++++++++++++++++++++++aa,++++,88+++++++++++++++++++++++88++++++++++++++++++++++++++++++++++++++++++++++++++d8'+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
				+++++++++++++++++++++++++++"Y8bbdP"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++d8'++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
																																																					 Font: Univers.
				*/

				var phoneValidation = (function ($, thisModule) {
					
					/*
							 (__)   
							 (oo)   
					  /-------\/    
					 / |     ||----> Private functions.
					*  ||----||     
					  ___/  ___/
					*/
					
					var internalProtection = {};
					
					/*
							 (__)   
							 (oo)   
					  /-------\/    
					 / |     ||----> Private functions: 
					*  ||----||     
					  ___/  ___/
					*/
					
					internalProtection.frmPhoneValidation = function () {

						console.log('Testing.');

					};
					
					/*
							 (__)   
							 (oo)   
					  /-------\/    
					 / |     ||----> Private functions: 
					*  ||----||     
					  ___/  ___/
					*/
					
					internalProtection.codeValidation = function () {

						console.log('Testing.');

					};
					
					/*
							 (__)   
							 (oo)   
					  /-------\/    
					 / |     ||----> Public functions: Start all subroutines.
					*  ||----||     
					  ___/  ___/
					*/
					
					thisModule.init = function (opts) {

						var excute = function () {

							internalProtection.frmPhoneValidation();

							internalProtection.codeValidation();

						};

						opts.excute ? excute() : console.log('Sorry! Do not have the permission to excute part of program.');

					};

					return thisModule;

				} ($, phoneValidation || {}));

				phoneValidation.init({excute: true});
				
				
				
				/**
				 * Close the boot prompt.
				 */

				$('.enterTip').children('a').on('click', function (e) {
					
					e.stopPropagation();
					
					e.preventDefault();
					
					$(this).parent().addClass('hide');
					
				});

				/*
				+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
				88888888888++++++++++++++++++++++++88++++++88++++++888888888888+++++++++++++++++++++++++++++++++++++++++++++88b+++++++++++d88++++++++++++++++++++++++88++88+++++ad88++88+++++++++++++++++++++++88++
				88+++++++++++++++++++++++++++++++++88++++++88+++++++++++88++++++++++++++++++++++++++++++++++++++++++++++++++888b+++++++++d888++++++++++++++++++++++++88++""++++d8"++++""+++++++++++++++++++++++88++
				88+++++++++++++++++++++++++++++++++88++++++88+++++++++++88++++++++++++++++++++++++++++++++++++++++++++++++++88`8b+++++++d8'88++++++++++++++++++++++++88++++++++88++++++++++++++++++++++++++++++88++
				88aaaaa++++++8b,dPPYba,++++,adPPYb,88++++++88+++++++++++88++++++++,adPPYba,+++8b,dPPYba,+++8b+++++++d8++++++88+`8b+++++d8'+88+++,adPPYba,++++,adPPYb,88++88++MM88MMM++88+++,adPPYba,+++,adPPYb,88++
				88"""""++++++88P'+++`"8a++a8"++++`Y88+++++++++++++++++++88+++++++a8"+++++"8a++88P'+++`"8a++`8b+++++d8'++++++88++`8b+++d8'++88++a8"+++++"8a++a8"++++`Y88++88++++88+++++88++a8P_____88++a8"++++`Y88++
				88+++++++++++88+++++++88++8b+++++++88++++++88+++++++++++88+++++++8b+++++++d8++88+++++++88+++`8b+++d8'+++++++88+++`8b+d8'+++88++8b+++++++d8++8b+++++++88++88++++88+++++88++8PP"""""""++8b+++++++88++
				88+++++++++++88+++++++88++"8a,+++,d88++++++88+++++++++++88+++++++"8a,+++,a8"++88+++++++88++++`8b,d8'++++++++88++++`888'++++88++"8a,+++,a8"++"8a,+++,d88++88++++88+++++88++"8b,+++,aa++"8a,+++,d88++
				88888888888++88+++++++88+++`"8bbdP"Y8++++++88+++++++++++88++++++++`"YbbdP"'+++88+++++++88++++++Y88'+++++++++88+++++`8'+++++88+++`"YbbdP"'++++`"8bbdP"Y8++88++++88+++++88+++`"Ybbd8"'+++`"8bbdP"Y8++
				+++++++++++++++++++++++++++++++++++++++++++88++++++++++++++++++++++++++++++++++++++++++++++++++d8'+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
				++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++d8'++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
																																																	 Font: Univers.
				*/
				
				
				
				/**
				 * Development dependency: grid system.
				 */
				
				gridder;
				
				
				
				/**
				 * Title modify component( Public ) test.
				 */
				
				modifyTitle();
				
			});
			
		});
		
	};
	
	boot.judgement = function (opts) {
		
		if (this.isIE()) {
			
			this.isGteIE9() ? this.req(opts.jq2x) : this.req(opts.jq1x);
			
		} else {
			
			this.req(opts.jq2x);
			
		}
		
	};
	
	/*             ___   ___
				 \  \  \  \
	   (___)   ___\__\__\__\__
	   (o o)   |  O O O O O O|
	  --\ /----+-------------+-------/
	  |  O                          /
	   \                           /
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ => moo__Steerage ...
	*/
	
	boot.judgement({
		
		jq1x: 'ajax/libs/js/jquery/1.10.2/jquery.min',
		
		jq2x: 'ajax/libs/js/jquery/2.0.3/jquery.min'
		
	});
		
}(window, document, requirejs, require));