---
path: "/blog/what-is-render-props"
date: "2018-08-01"
title: "Разбираемся с Render Props на примере"
description: "Честно говоря, раньше я не представлял ситуаций, в которых можно применить React render props, пока не увидел практический пример, поэтому, поехали! Или можете прочитать TLDR;"
titleImage: "https://habrastorage.org/webt/k8/rt/qj/k8rtqjegwjnbwygktbxwotp14uq.png"
---

Всем привет! Представляю вашему вниманию перевод статьи <a href="https://engineering.dollarshaveclub.com/learn-render-props-by-example-da3e2524dd2e">"Learn Render Props by Example"</a>.

<img src="https://habrastorage.org/webt/k8/rt/qj/k8rtqjegwjnbwygktbxwotp14uq.png" alt="image"/>

Честно говоря, раньше я не представлял ситуаций, в которых можно применить React render props, пока не увидел практический пример<cut/>, поэтому, поехали! Или можете прочитать TLDR;

<b>Ситуация:</b>

Нам поручено создать кнопку, открывающую окно PayPal:
<img src="https://habrastorage.org/webt/pk/ub/k9/pkubk9vmqesaghcywl66ukr6qpu.png" alt="image"/>

Мы открываем наш редактор и создаем компонент PayPalLauncher:

<img src="https://habrastorage.org/webt/px/r2/r0/pxr2r09jwpfkqskoa9vobqydtak.png" alt="image"/>

PayPalLauncher может содержать экземпляр PayPal, с дополнительной логикой, поэтому неплохо было бы обернуть его (PayPal) в компонент.

Но что, если требуется использовать дополнительные элементы PayPal? Например:

<img src="https://habrastorage.org/webt/_v/gf/v3/_vgfv3swzwtjel1psvjms-ku3tc.png" alt="image"/>

Теперь у нас есть две кнопки и оранжевая ссылка, которая должна открыть окно PayPal. Давайте рассмотрим несколько способов реализовать это.

<b>Вариант 1 – Логика в render()</b>

Вначале у вас может возникнуть соблазн написать код внутри PayPalLauncher:

<img src="https://habrastorage.org/webt/ck/n7/tf/ckn7tfo7-ksitmk1qi_sxpni-wa.png" alt="image"/>

Здесь мы передаем prop, называемый type для того, чтобы определить какой элемент PayPal рендерить. Много логики, чтобы выразить несколько визуальных изменений. Это все еще не дает нам возможности легко отрисовывать любой компонент по необходимости. Что если есть способ отделить логику от представления?

<b>Вариант 2 — Вложенность</b>

Вложенность помогает нам писать более понятный JSX.

<img src="https://habrastorage.org/webt/a3/ig/xl/a3igxl2ujuazgcusguzvdxhap9q.png" alt="image"/>

Теперь у нас есть четкое разделение между логикой (PayPalLauncher) и представлением (PayPalButton). Это дает нам возможность отображать любой компонент в качестве элемента PayPal (PayPal trigger). И это хорошо читается! Но как мы передаем props между PayPalLauncher и PayPalButton? Давайте посмотрим как это выглядит в PayPalLauncher:

<img src="https://habrastorage.org/webt/bo/xs/dl/boxsdlcoen2a69oytygx9hm33ke.png" alt="image"/>

Что здесь происходит?! Мы клонируем children и предаем prop в launchPayPal неявно, каждому ребенку. Это значит, что каждый ребенок, которого вы вложите в PayPalLauncher, должен принимать prop launchPayPal. Хотя вложенность дает нам более понятный JSX, этот метод не является идеальным, особенно если мы пытаемся создать переиспользуемые компоненты с общими интерфейсами.

<b>Вариант 3 — Render Props</b>

Render Props — это метод передачи props от родителя ребенку, используя функцию или замыкание. Давайте посмотрим, как это выглядит:

<img src="https://habrastorage.org/webt/xg/jq/m3/xgjqm32lbcghrebjzj3y6l0xojy.png" alt="image"/>

Вместо того, чтобы обрабатывать props.children в качестве ноды, мы создаем замыкание и выбираем аргументы для передачи дочерним нодам. В этом случае мы используем метод экземпляра класса launchPayPal.

Когда мы реализуем это, полученный вариант будет выглядеть так:

<img src="https://habrastorage.org/webt/0y/ef/wd/0yefwdvtpvqxxaosd_-wzoa8xrk.png" alt="image"/>

Что это значит? Вместо элементов, мы передаем функцию как ребенка в PayPalLauncher. Из-за этого мы можем легко передать launchPayPal в обработчик onClick компонента PayPalButton. Теперь мы можем рендерить любой нужный нам компонент, и мапить родительский launchPayPal в любой обработчик ребенка.

<b>Немного больше:</b>

Неожиданным преимуществом использования render props является то, что этот подход дает возможность передавать launchPayPal в Page, и позволяет нам добавлять больше функциональности. Например, допустим, вы хотите зарегистрировать пользователя и подтвердить форму перед запуском окна PayPal:

<img src="https://habrastorage.org/webt/-4/93/je/-493jelg3u68jfpoufnkxzlvy9i.png" alt="image"/>

Поскольку launchPayPal отображается через render props на Page, мы можем легко добавить дополнительный контекстно-зависимый функционал, используя композицию функций. Здесь мы сохраняем разницу между Page и PayPalLauncher и используем pipe, чтобы улучшить читаемость .

<b>Резюме</b>

Что мы получаем при использовании render props?

<ul>
	<li>Переиспользование логики — отделяя отображение от логики, нам не нужно подгонять логику под каждый компонент или визуальное представление.</li>
	<li>Чистый и хорошо читаемый JSX.</li>
	<li>Улучшается структура и функциональная составляющая наших React приложений.</li>
</ul>

* Помните, что render props является паттерном и может быть реализован несколькими способами — только вы должны выбирать, что использовать с вашем случае.
