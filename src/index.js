import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEnMessages from "./locales/messages/en.json";
import localeEsMessages from "./locales/messages/es.json";


import JobsList from "./components/jobslist";

const messages = {
	'en': localeEnMessages,
	'es': localeEsMessages
}

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
		<IntlProvider locale={language} messages={messages[language]} >
			<JobsList />
		</IntlProvider>, document.getElementById("root")
);
