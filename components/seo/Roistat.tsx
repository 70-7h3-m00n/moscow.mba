import { dev } from '@/config/index'

export const Roistat = () => {
	return (
		<>
			<script
				type='text/javascript'
				dangerouslySetInnerHTML={{
					__html: `
					(function(w, d, s, h, id) {
							w.roistatProjectId = id; w.roistatHost = h;
							var p = d.location.protocol == "https:" ? "https://" : "http://";
							var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
							var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
					})(window, document, 'script', 'cloud.roistat.com', '4c5a69eb8374b9673e7545e55aa19050');`
				}}
			/>
			{!dev && (
				<script
					type='text/javascript'
					dangerouslySetInnerHTML={{
						__html: `
					(function(w, d, s, h, id) {
							w.roistatProjectId = id; w.roistatHost = h;
							var p = d.location.protocol == "https:" ? "https://" : "http://";
							var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
							var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
					})(window, document, 'script', 'cloud.roistat.com', '4c5a69eb8374b9673e7545e55aa19050');`
					}}
				/>
			)}
			<script
				className='js-whatsapp-message-container'
				type='text/javascript'
				dangerouslySetInnerHTML={{
					__html: `"[Номер заявки: {roistat_visit}] Здравствуйте! Хочу уточнить информацию по поводу  "`
				}}
			/>
			<script
				className='js-whatsapp-message-container'
				type='text/javascript'
				dangerouslySetInnerHTML={{
					__html: `
							(function() {
									if (window.roistat !== undefined) {
											handler();
									} else {
											var pastCallback = typeof window.onRoistatAllModulesLoaded === "function" ? window.onRoistatAllModulesLoaded : null;
											window.onRoistatAllModulesLoaded = function () {
													if (pastCallback !== null) {
															pastCallback();
													}
													handler();
											};
									}
					
									function handler() {
											function init() {
													appendMessageToLinks();
					
													var delays = [1000, 5000, 15000];
													setTimeout(function func(i) {
															if (i === undefined) {
																	i = 0;
															}
															appendMessageToLinks();
															i++;
															if (typeof delays[i] !== 'undefined') {
																	setTimeout(func, delays[i], i);
															}
													}, delays[0]);
											}
					
											function replaceQueryParam(url, param, value) {
													var explodedUrl = url.split('?');
													var baseUrl = explodedUrl[0] || '';
													var query = '?' + (explodedUrl[1] || '');
													var regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
													var queryWithoutParameter = query.replace(regex, "$1").replace(/&$/, '');
													return baseUrl + (queryWithoutParameter.length > 2 ? queryWithoutParameter  + '&' : '?') + (value ? param + "=" + value : '');
											}
					
											function appendMessageToLinks() {
													var message = document.querySelector('.js-whatsapp-message-container').text;
													var text = message.replace(/{roistat_visit}/g, window.roistatGetCookie('roistat_visit'));
													text = encodeURI(text);
													var linkElements = document.querySelectorAll('[href*="//wa.me"], [href*="//api.whatsapp.com/send"], [href*="//web.whatsapp.com/send"], [href^="whatsapp://send"]');
													for (var elementKey in linkElements) {
															if (linkElements.hasOwnProperty(elementKey)) {
																	var element = linkElements[elementKey];
																	element.href = replaceQueryParam(element.href, 'text', text);
															}
													}
											}
											if (document.readyState === 'loading') {
													document.addEventListener('DOMContentLoaded', init);
											} else {
													init();
											}
									};
							})();`
				}}
			/>
		</>
	)
}
