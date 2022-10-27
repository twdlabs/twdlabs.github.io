


// Define number of posts per preview. 
const numPreviewPosts = 2;

// Define month names. 
const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',];

// Define default posts. 
const defaultPostData = [
	{
		posttitle: 'Hello world 1',
		posttime: {
			year:2021,
			month:10,
			date:10,
			hour:13,
			minute:59,
			second:59
		},
		postcontent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus enim pariatur eius corrupti suscipit! Blanditiis nostrum esse, illo in harum quisquam tempora dignissimos omnis nihil beatae voluptatibus, enim labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et quis eum distinctio blanditiis excepturi aliquid quos vero dolores laborum nulla, vitae, soluta quasi deserunt! Illum officiis voluptates veniam itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore qui. Ipsum impedit, molestiae ea debitis, quasi hic ratione modi beatae minima quaerat dolorem, voluptates expedita eius labore? Necessitatibus, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus optio neque quaerat! Nihil velit minus et necessitatibus, porro beatae neque illum qui numquam quidem ad quam hic officia. Culpa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptates, at voluptatem ex voluptatum a, eligendi quibusdam optio illum ipsum possimus adipisci asperiores autem quia delectus temporibus dolorum repellat aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit magnam debitis sint nulla fugiat, ut eligendi quam repellat commodi possimus maxime blanditiis nihil expedita ullam sapiente, ea perferendis placeat cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum omnis fuga, accusamus magnam, aliquam autem mollitia facilis rerum, repudiandae eveniet officia voluptate excepturi incidunt aliquid! Quisquam sint illum porro distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam molestias eos similique aut dicta, earum consequuntur dolores aperiam ad. Vero possimus, accusantium neque eligendi porro aperiam? Expedita, rem libero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque harum et vitae, expedita, fugiat culpa ad quisquam, possimus ut alias temporibus aperiam dolorem voluptatum similique tempora! Aliquid, commodi libero. Voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores voluptatem eveniet quos commodi tenetur minus expedita, ea id a ipsam consequuntur corrupti impedit voluptatibus adipisci iusto dolor tempore accusamus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, sequi. Impedit fugiat cumque tempore eligendi expedita eos, ab, qui architecto nesciunt dolorum, velit officia! Quo dolorem quis ab architecto perferendis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe placeat cumque reprehenderit! Perferendis quas molestias pariatur earum incidunt soluta. Quidem consequuntur quis harum! Voluptas necessitatibus blanditiis accusamus maiores exercitationem doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt natus qui illo perferendis corporis totam itaque rem optio accusamus in maxime tempore, recusandae amet nihil odio facilis possimus illum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed odit deserunt minus velit. Eos fugiat consectetur omnis ducimus nobis sint debitis ad culpa, odit, laborum est quod ipsum dolore quos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt error ratione doloribus numquam nesciunt voluptate, perspiciatis consequuntur, ad voluptas esse dolorum, delectus beatae neque harum similique ea? Nesciunt, voluptatem quos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laudantium quod nihil ratione consequuntur itaque deleniti eveniet debitis commodi, suscipit culpa vitae obcaecati, optio quos quo cupiditate, vel voluptates sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis deleniti ad. Impedit harum expedita possimus officia excepturi doloribus in enim. Fugiat sunt sequi nostrum nesciunt aliquid rem ipsam dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad, architecto doloremque delectus inventore fugiat odio. Vero sed possimus officiis optio eligendi in eveniet, repudiandae similique voluptatibus ea nesciunt voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nemo sint. Magni assumenda aut harum, officiis ab nostrum aspernatur repudiandae. Alias voluptatibus tempore fugiat corrupti laboriosam voluptate corporis assumenda dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex sequi non quo ullam inventore quae eaque accusantium dolore, amet alias eligendi magnam tempora commodi quasi, ad debitis autem veniam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quidem, perferendis recusandae maxime omnis, numquam iure fugiat unde dicta accusamus dolor aspernatur fugit consequuntur hic. Minus sapiente nobis velit aperiam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, sint. Excepturi, tempora reiciendis enim animi nam ab, quod, libero qui est deserunt perferendis! Dolorem corrupti natus nemo cumque nobis distinctio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dignissimos molestias culpa recusandae harum obcaecati, debitis eaque dicta modi atque expedita! Velit error culpa officia optio? Odit optio veniam magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ab modi dignissimos ad error numquam odio aut expedita, dolore maxime iusto obcaecati eum voluptas beatae? Ad sapiente minus ratione amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit officia, ex quae cupiditate similique rerum minus labore blanditiis ratione architecto laboriosam nesciunt illum laborum? Facere accusantium veritatis ratione minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet molestiae dolor iure pariatur id ab quidem illum fugit, magni quis praesentium placeat laborum. Totam repellat quam voluptas iste debitis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta id iste aliquid qui veritatis! Quisquam vero autem suscipit tempora ipsa eaque magnam similique iure. Repellat distinctio temporibus odio mollitia sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur magni enim sunt nobis sapiente, delectus quidem accusantium, expedita, esse adipisci atque illo a earum autem numquam. Ducimus, fuga rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ea quas obcaecati, iure quidem magnam possimus nihil incidunt dolor consequuntur beatae inventore, eos natus quibusdam ipsum vel pariatur aliquam tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt quasi, eligendi fugit magnam incidunt veniam. Alias quas molestias, voluptatibus pariatur, repudiandae culpa blanditiis ducimus omnis dolor similique odit obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In odit animi eum vel iure esse consectetur amet maiores quasi ut perspiciatis, excepturi quaerat sit corrupti rem neque nemo reprehenderit sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident quae, repellat, harum eum aliquid veniam sunt enim, ullam a saepe commodi labore velit excepturi numquam nulla fuga maiores reprehenderit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic ad laboriosam sint quasi obcaecati earum esse sunt excepturi eligendi quod, dolore veritatis ipsam impedit labore est distinctio rerum tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tenetur quaerat accusantium, similique ducimus dignissimos consequatur beatae error ea ab illo neque tempore obcaecati velit voluptate et veniam. Pariatur, consectetur!'
	},
	{
		posttitle: 'Hello world 2',
		posttime: {
			year:2021,
			month:2,
			date:9,
			hour:13,
			minute:59,
			second:59
		},
		postcontent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus enim pariatur eius corrupti suscipit! Blanditiis nostrum esse, illo in harum quisquam tempora dignissimos omnis nihil beatae voluptatibus, enim labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et quis eum distinctio blanditiis excepturi aliquid quos vero dolores laborum nulla, vitae, soluta quasi deserunt! Illum officiis voluptates veniam itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore qui. Ipsum impedit, molestiae ea debitis, quasi hic ratione modi beatae minima quaerat dolorem, voluptates expedita eius labore? Necessitatibus, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus optio neque quaerat! Nihil velit minus et necessitatibus, porro beatae neque illum qui numquam quidem ad quam hic officia. Culpa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptates, at voluptatem ex voluptatum a, eligendi quibusdam optio illum ipsum possimus adipisci asperiores autem quia delectus temporibus dolorum repellat aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit magnam debitis sint nulla fugiat, ut eligendi quam repellat commodi possimus maxime blanditiis nihil expedita ullam sapiente, ea perferendis placeat cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum omnis fuga, accusamus magnam, aliquam autem mollitia facilis rerum, repudiandae eveniet officia voluptate excepturi incidunt aliquid! Quisquam sint illum porro distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam molestias eos similique aut dicta, earum consequuntur dolores aperiam ad. Vero possimus, accusantium neque eligendi porro aperiam? Expedita, rem libero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque harum et vitae, expedita, fugiat culpa ad quisquam, possimus ut alias temporibus aperiam dolorem voluptatum similique tempora! Aliquid, commodi libero. Voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores voluptatem eveniet quos commodi tenetur minus expedita, ea id a ipsam consequuntur corrupti impedit voluptatibus adipisci iusto dolor tempore accusamus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, sequi. Impedit fugiat cumque tempore eligendi expedita eos, ab, qui architecto nesciunt dolorum, velit officia! Quo dolorem quis ab architecto perferendis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe placeat cumque reprehenderit! Perferendis quas molestias pariatur earum incidunt soluta. Quidem consequuntur quis harum! Voluptas necessitatibus blanditiis accusamus maiores exercitationem doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt natus qui illo perferendis corporis totam itaque rem optio accusamus in maxime tempore, recusandae amet nihil odio facilis possimus illum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed odit deserunt minus velit. Eos fugiat consectetur omnis ducimus nobis sint debitis ad culpa, odit, laborum est quod ipsum dolore quos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt error ratione doloribus numquam nesciunt voluptate, perspiciatis consequuntur, ad voluptas esse dolorum, delectus beatae neque harum similique ea? Nesciunt, voluptatem quos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laudantium quod nihil ratione consequuntur itaque deleniti eveniet debitis commodi, suscipit culpa vitae obcaecati, optio quos quo cupiditate, vel voluptates sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis deleniti ad. Impedit harum expedita possimus officia excepturi doloribus in enim. Fugiat sunt sequi nostrum nesciunt aliquid rem ipsam dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad, architecto doloremque delectus inventore fugiat odio. Vero sed possimus officiis optio eligendi in eveniet, repudiandae similique voluptatibus ea nesciunt voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nemo sint. Magni assumenda aut harum, officiis ab nostrum aspernatur repudiandae. Alias voluptatibus tempore fugiat corrupti laboriosam voluptate corporis assumenda dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex sequi non quo ullam inventore quae eaque accusantium dolore, amet alias eligendi magnam tempora commodi quasi, ad debitis autem veniam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quidem, perferendis recusandae maxime omnis, numquam iure fugiat unde dicta accusamus dolor aspernatur fugit consequuntur hic. Minus sapiente nobis velit aperiam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, sint. Excepturi, tempora reiciendis enim animi nam ab, quod, libero qui est deserunt perferendis! Dolorem corrupti natus nemo cumque nobis distinctio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dignissimos molestias culpa recusandae harum obcaecati, debitis eaque dicta modi atque expedita! Velit error culpa officia optio? Odit optio veniam magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ab modi dignissimos ad error numquam odio aut expedita, dolore maxime iusto obcaecati eum voluptas beatae? Ad sapiente minus ratione amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit officia, ex quae cupiditate similique rerum minus labore blanditiis ratione architecto laboriosam nesciunt illum laborum? Facere accusantium veritatis ratione minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet molestiae dolor iure pariatur id ab quidem illum fugit, magni quis praesentium placeat laborum. Totam repellat quam voluptas iste debitis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta id iste aliquid qui veritatis! Quisquam vero autem suscipit tempora ipsa eaque magnam similique iure. Repellat distinctio temporibus odio mollitia sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur magni enim sunt nobis sapiente, delectus quidem accusantium, expedita, esse adipisci atque illo a earum autem numquam. Ducimus, fuga rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ea quas obcaecati, iure quidem magnam possimus nihil incidunt dolor consequuntur beatae inventore, eos natus quibusdam ipsum vel pariatur aliquam tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt quasi, eligendi fugit magnam incidunt veniam. Alias quas molestias, voluptatibus pariatur, repudiandae culpa blanditiis ducimus omnis dolor similique odit obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In odit animi eum vel iure esse consectetur amet maiores quasi ut perspiciatis, excepturi quaerat sit corrupti rem neque nemo reprehenderit sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident quae, repellat, harum eum aliquid veniam sunt enim, ullam a saepe commodi labore velit excepturi numquam nulla fuga maiores reprehenderit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic ad laboriosam sint quasi obcaecati earum esse sunt excepturi eligendi quod, dolore veritatis ipsam impedit labore est distinctio rerum tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tenetur quaerat accusantium, similique ducimus dignissimos consequatur beatae error ea ab illo neque tempore obcaecati velit voluptate et veniam. Pariatur, consectetur!'
	},
	{
		posttitle: 'Hello world 3',
		posttime: {
			year:2021,
			month:3,
			date:3,
			hour:13,
			minute:59,
			second:59
		},
		postcontent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus enim pariatur eius corrupti suscipit! Blanditiis nostrum esse, illo in harum quisquam tempora dignissimos omnis nihil beatae voluptatibus, enim labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et quis eum distinctio blanditiis excepturi aliquid quos vero dolores laborum nulla, vitae, soluta quasi deserunt! Illum officiis voluptates veniam itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore qui. Ipsum impedit, molestiae ea debitis, quasi hic ratione modi beatae minima quaerat dolorem, voluptates expedita eius labore? Necessitatibus, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus optio neque quaerat! Nihil velit minus et necessitatibus, porro beatae neque illum qui numquam quidem ad quam hic officia. Culpa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptates, at voluptatem ex voluptatum a, eligendi quibusdam optio illum ipsum possimus adipisci asperiores autem quia delectus temporibus dolorum repellat aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit magnam debitis sint nulla fugiat, ut eligendi quam repellat commodi possimus maxime blanditiis nihil expedita ullam sapiente, ea perferendis placeat cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum omnis fuga, accusamus magnam, aliquam autem mollitia facilis rerum, repudiandae eveniet officia voluptate excepturi incidunt aliquid! Quisquam sint illum porro distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam molestias eos similique aut dicta, earum consequuntur dolores aperiam ad. Vero possimus, accusantium neque eligendi porro aperiam? Expedita, rem libero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque harum et vitae, expedita, fugiat culpa ad quisquam, possimus ut alias temporibus aperiam dolorem voluptatum similique tempora! Aliquid, commodi libero. Voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores voluptatem eveniet quos commodi tenetur minus expedita, ea id a ipsam consequuntur corrupti impedit voluptatibus adipisci iusto dolor tempore accusamus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, sequi. Impedit fugiat cumque tempore eligendi expedita eos, ab, qui architecto nesciunt dolorum, velit officia! Quo dolorem quis ab architecto perferendis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe placeat cumque reprehenderit! Perferendis quas molestias pariatur earum incidunt soluta. Quidem consequuntur quis harum! Voluptas necessitatibus blanditiis accusamus maiores exercitationem doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt natus qui illo perferendis corporis totam itaque rem optio accusamus in maxime tempore, recusandae amet nihil odio facilis possimus illum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed odit deserunt minus velit. Eos fugiat consectetur omnis ducimus nobis sint debitis ad culpa, odit, laborum est quod ipsum dolore quos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt error ratione doloribus numquam nesciunt voluptate, perspiciatis consequuntur, ad voluptas esse dolorum, delectus beatae neque harum similique ea? Nesciunt, voluptatem quos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laudantium quod nihil ratione consequuntur itaque deleniti eveniet debitis commodi, suscipit culpa vitae obcaecati, optio quos quo cupiditate, vel voluptates sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis deleniti ad. Impedit harum expedita possimus officia excepturi doloribus in enim. Fugiat sunt sequi nostrum nesciunt aliquid rem ipsam dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad, architecto doloremque delectus inventore fugiat odio. Vero sed possimus officiis optio eligendi in eveniet, repudiandae similique voluptatibus ea nesciunt voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nemo sint. Magni assumenda aut harum, officiis ab nostrum aspernatur repudiandae. Alias voluptatibus tempore fugiat corrupti laboriosam voluptate corporis assumenda dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex sequi non quo ullam inventore quae eaque accusantium dolore, amet alias eligendi magnam tempora commodi quasi, ad debitis autem veniam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quidem, perferendis recusandae maxime omnis, numquam iure fugiat unde dicta accusamus dolor aspernatur fugit consequuntur hic. Minus sapiente nobis velit aperiam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, sint. Excepturi, tempora reiciendis enim animi nam ab, quod, libero qui est deserunt perferendis! Dolorem corrupti natus nemo cumque nobis distinctio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dignissimos molestias culpa recusandae harum obcaecati, debitis eaque dicta modi atque expedita! Velit error culpa officia optio? Odit optio veniam magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ab modi dignissimos ad error numquam odio aut expedita, dolore maxime iusto obcaecati eum voluptas beatae? Ad sapiente minus ratione amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit officia, ex quae cupiditate similique rerum minus labore blanditiis ratione architecto laboriosam nesciunt illum laborum? Facere accusantium veritatis ratione minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet molestiae dolor iure pariatur id ab quidem illum fugit, magni quis praesentium placeat laborum. Totam repellat quam voluptas iste debitis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta id iste aliquid qui veritatis! Quisquam vero autem suscipit tempora ipsa eaque magnam similique iure. Repellat distinctio temporibus odio mollitia sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur magni enim sunt nobis sapiente, delectus quidem accusantium, expedita, esse adipisci atque illo a earum autem numquam. Ducimus, fuga rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ea quas obcaecati, iure quidem magnam possimus nihil incidunt dolor consequuntur beatae inventore, eos natus quibusdam ipsum vel pariatur aliquam tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt quasi, eligendi fugit magnam incidunt veniam. Alias quas molestias, voluptatibus pariatur, repudiandae culpa blanditiis ducimus omnis dolor similique odit obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In odit animi eum vel iure esse consectetur amet maiores quasi ut perspiciatis, excepturi quaerat sit corrupti rem neque nemo reprehenderit sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident quae, repellat, harum eum aliquid veniam sunt enim, ullam a saepe commodi labore velit excepturi numquam nulla fuga maiores reprehenderit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic ad laboriosam sint quasi obcaecati earum esse sunt excepturi eligendi quod, dolore veritatis ipsam impedit labore est distinctio rerum tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tenetur quaerat accusantium, similique ducimus dignissimos consequatur beatae error ea ab illo neque tempore obcaecati velit voluptate et veniam. Pariatur, consectetur!'
	},
	{
		posttitle: 'Hello world 4',
		posttime: {
			year:2021,
			month:4,
			date:4,
			hour:13,
			minute:59,
			second:59
		},
		postcontent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus enim pariatur eius corrupti suscipit! Blanditiis nostrum esse, illo in harum quisquam tempora dignissimos omnis nihil beatae voluptatibus, enim labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et quis eum distinctio blanditiis excepturi aliquid quos vero dolores laborum nulla, vitae, soluta quasi deserunt! Illum officiis voluptates veniam itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore qui. Ipsum impedit, molestiae ea debitis, quasi hic ratione modi beatae minima quaerat dolorem, voluptates expedita eius labore? Necessitatibus, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus optio neque quaerat! Nihil velit minus et necessitatibus, porro beatae neque illum qui numquam quidem ad quam hic officia. Culpa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptates, at voluptatem ex voluptatum a, eligendi quibusdam optio illum ipsum possimus adipisci asperiores autem quia delectus temporibus dolorum repellat aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit magnam debitis sint nulla fugiat, ut eligendi quam repellat commodi possimus maxime blanditiis nihil expedita ullam sapiente, ea perferendis placeat cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum omnis fuga, accusamus magnam, aliquam autem mollitia facilis rerum, repudiandae eveniet officia voluptate excepturi incidunt aliquid! Quisquam sint illum porro distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam molestias eos similique aut dicta, earum consequuntur dolores aperiam ad. Vero possimus, accusantium neque eligendi porro aperiam? Expedita, rem libero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque harum et vitae, expedita, fugiat culpa ad quisquam, possimus ut alias temporibus aperiam dolorem voluptatum similique tempora! Aliquid, commodi libero. Voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores voluptatem eveniet quos commodi tenetur minus expedita, ea id a ipsam consequuntur corrupti impedit voluptatibus adipisci iusto dolor tempore accusamus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, sequi. Impedit fugiat cumque tempore eligendi expedita eos, ab, qui architecto nesciunt dolorum, velit officia! Quo dolorem quis ab architecto perferendis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe placeat cumque reprehenderit! Perferendis quas molestias pariatur earum incidunt soluta. Quidem consequuntur quis harum! Voluptas necessitatibus blanditiis accusamus maiores exercitationem doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt natus qui illo perferendis corporis totam itaque rem optio accusamus in maxime tempore, recusandae amet nihil odio facilis possimus illum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed odit deserunt minus velit. Eos fugiat consectetur omnis ducimus nobis sint debitis ad culpa, odit, laborum est quod ipsum dolore quos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt error ratione doloribus numquam nesciunt voluptate, perspiciatis consequuntur, ad voluptas esse dolorum, delectus beatae neque harum similique ea? Nesciunt, voluptatem quos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laudantium quod nihil ratione consequuntur itaque deleniti eveniet debitis commodi, suscipit culpa vitae obcaecati, optio quos quo cupiditate, vel voluptates sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis deleniti ad. Impedit harum expedita possimus officia excepturi doloribus in enim. Fugiat sunt sequi nostrum nesciunt aliquid rem ipsam dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad, architecto doloremque delectus inventore fugiat odio. Vero sed possimus officiis optio eligendi in eveniet, repudiandae similique voluptatibus ea nesciunt voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nemo sint. Magni assumenda aut harum, officiis ab nostrum aspernatur repudiandae. Alias voluptatibus tempore fugiat corrupti laboriosam voluptate corporis assumenda dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex sequi non quo ullam inventore quae eaque accusantium dolore, amet alias eligendi magnam tempora commodi quasi, ad debitis autem veniam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quidem, perferendis recusandae maxime omnis, numquam iure fugiat unde dicta accusamus dolor aspernatur fugit consequuntur hic. Minus sapiente nobis velit aperiam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, sint. Excepturi, tempora reiciendis enim animi nam ab, quod, libero qui est deserunt perferendis! Dolorem corrupti natus nemo cumque nobis distinctio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dignissimos molestias culpa recusandae harum obcaecati, debitis eaque dicta modi atque expedita! Velit error culpa officia optio? Odit optio veniam magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ab modi dignissimos ad error numquam odio aut expedita, dolore maxime iusto obcaecati eum voluptas beatae? Ad sapiente minus ratione amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit officia, ex quae cupiditate similique rerum minus labore blanditiis ratione architecto laboriosam nesciunt illum laborum? Facere accusantium veritatis ratione minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet molestiae dolor iure pariatur id ab quidem illum fugit, magni quis praesentium placeat laborum. Totam repellat quam voluptas iste debitis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta id iste aliquid qui veritatis! Quisquam vero autem suscipit tempora ipsa eaque magnam similique iure. Repellat distinctio temporibus odio mollitia sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur magni enim sunt nobis sapiente, delectus quidem accusantium, expedita, esse adipisci atque illo a earum autem numquam. Ducimus, fuga rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ea quas obcaecati, iure quidem magnam possimus nihil incidunt dolor consequuntur beatae inventore, eos natus quibusdam ipsum vel pariatur aliquam tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt quasi, eligendi fugit magnam incidunt veniam. Alias quas molestias, voluptatibus pariatur, repudiandae culpa blanditiis ducimus omnis dolor similique odit obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In odit animi eum vel iure esse consectetur amet maiores quasi ut perspiciatis, excepturi quaerat sit corrupti rem neque nemo reprehenderit sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident quae, repellat, harum eum aliquid veniam sunt enim, ullam a saepe commodi labore velit excepturi numquam nulla fuga maiores reprehenderit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic ad laboriosam sint quasi obcaecati earum esse sunt excepturi eligendi quod, dolore veritatis ipsam impedit labore est distinctio rerum tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tenetur quaerat accusantium, similique ducimus dignissimos consequatur beatae error ea ab illo neque tempore obcaecati velit voluptate et veniam. Pariatur, consectetur!'
	}
];

// Define blog post data. 
// const blogData = [];
const blogData = defaultPostData;

// Define event post data. 
// const eventData = [];
const eventData = defaultPostData;


/*****/


// Show preview of blog posts. 
showBlogPosts();

// Show preview of event posts. 
showEventPosts();


/*****/


// Show blog posts. 
function showBlogPosts() {

	// Get destination on page. 
	let blogpostsDestination = 'section.preview div#blogposts ul.postlist';

	// Show preview posts. 
	showPostPreviews(blogData, numPreviewPosts, blogpostsDestination);
}

// Show event posts. 
function showEventPosts() {

	// Get destination on page. 
	let eventsDestination = 'section.preview div#events ul.postlist';

	// Show preview posts. 
	showPostPreviews(eventData, numPreviewPosts, eventsDestination);
}

// Show preview of posts. 
function showPostPreviews(postData, numPosts, destination) {
	
	// Use all posts if less posts than preview amount. 
	if(postData.length < numPosts) {
		numPosts = postData.length;
	}

	// Initialize list of posts. 
	let result = '';

	// Create post elements. 
	for (let i=0 ; i<numPosts ; i++) {

		// Get post item. 
		let post = postData[i];

		// Get post excerpt. 
		let postexcerpt = getPostExcerpt(post.postcontent);
		let d = post.posttime.date;
		
		// Append post element. 
		result += `
		<!-- post -->
		<li class="post">
			
			<!-- postdate -->
			<div class="postdate">
				<!-- date -->
				<div class="date">
					<span class="month">${monthNames[post.posttime.month-1]}</span>
					<span class="date">${(d<10) ? '0'+d : d }</span>
				</div>
				<!-- /date -->
			</div>
			<!-- /postdate -->
			
			<!-- postcontent -->
			<div class="postcontent">
			
				<!-- postname -->
				<h4 class="postname">
					<a href="javascript:void(0)">${post.posttitle}</a>
				</h4>
				<!-- /postname -->
				
				<!-- postexcerpt -->
				<p class="postexcerpt">
					
					<!-- excerpt -->
					<span class="excerpt">${postexcerpt}</span>
					<!-- /excerpt -->
					
					<!-- readlink -->
					<a href="javascript:void(0)" class="readlink">Learn More</a>
					<!-- /readlink -->
					
				</p>
				<!-- /postexcerpt -->
				
			</div>
			<!-- /postcontent -->
		
		</li>
		<!-- /post -->`;

		/*****/

		// Get post excerpt. 
		function getPostExcerpt(content) {
			
			// Set excerpt word count. 
			let excerptWordLimit = 12;

			// Get individual words of post content. 
			let wordsFromPostContent = content.split(' ');
			// Get number of words in post content. 
			let numWordsInContent = wordsFromPostContent.length;

			// Check for post content overflow. 
			let postContentOverflow = false;
			if(numWordsInContent<excerptWordLimit) {
				// Use all content if less words than excerpt limit. 
				excerptWordLimit = numWordsInContent;
				postContentOverflow = false;
			}
			else {
				postContentOverflow = true;
			}

			// Create post content excerpt. 
			let excerpt = '';
			for (let j=0 ; j<excerptWordLimit ; j++) {
				// 
				excerpt += wordsFromPostContent[j] + ' ';
			}
			// Add ellipsis if some content is ommitted. 
			if(postContentOverflow) excerpt += '...';

			// 
			return excerpt;
		}
	}

	// Add post elements to page. 
	document.querySelector(destination).innerHTML = result;
}