package phonesale.service.impl;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import phonesale.converter.cartConverter;
import phonesale.converter.productConverter;
import phonesale.dto.cartDTO;
import phonesale.dto.productDTO;
import phonesale.entity.cartEntity;
import phonesale.entity.customerEntity;
import phonesale.entity.productEntity;
import phonesale.repository.cartRepository;
import phonesale.repository.customerRepository;
import phonesale.service.cartService;

@Service
public class cartServiceImpl implements cartService {
	@Autowired
	private cartRepository cartRe;
	
	@Autowired
	private customerRepository customerRe;
	
	@Autowired
	private cartConverter cartCo;
	
	@Autowired
	private productConverter productCo;
	
	@Override
	public List<productDTO> getProductCart(String username) {
		customerEntity customer = customerRe.findByName(username);
		Long customerId = customer.getId();
		List<cartEntity> cartItems = cartRe.findAllByCustomer_Id(customerId);
		cartItems.sort(Comparator.comparing(cartEntity::getId).reversed());
		List<productDTO> products = new ArrayList<>();
		for (cartEntity cartItem : cartItems) {
			products.add(productCo.toproductDTO(cartItem.getProduct()));
		}
		return products;
	}
	
	@Override
	public int totalCart(String username) {
		customerEntity customer = customerRe.findByName(username);
		List<cartEntity> cartItems = cartRe.findAllByCustomer_Id(customer.getId());
		return cartItems.size();
	}
	
	@Override
	public int quantity(Long productId) {
		cartEntity cart = cartRe.findByProduct_Id(productId);
		return cart.getQuantity();
	}
	
	@Override
	public Long totalPrice(String username) {
		customerEntity customer = customerRe.findByName(username);
		List<cartEntity> carts = cartRe.findAllByCustomer_Id(customer.getId());
		long sum =0;
		for(cartEntity item:carts) {
			productEntity product = item.getProduct();
			sum += item.getQuantity()*product.getPrice();
		}
		return sum;
	}
	
	@Override
	public void upQuantity(Long productId) {
		cartEntity cart = cartRe.findByProduct_Id(productId);
		cart.setQuantity(cart.getQuantity()+1);
        cartRe.save(cart);
	}
	@Override
	public void downQuantity(Long productId) {
		cartEntity cart = cartRe.findByProduct_Id(productId);
		if(cart.getQuantity() >1) {
			cart.setQuantity(cart.getQuantity()-1);
	        cartRe.save(cart);
		}
		else {
			cartRe.delete(cart);
		}
	}
	
	@Override
	public void deleteCart(Long productId) {
		cartEntity cart = cartRe.findByProduct_Id(productId);
        cartRe.delete(cart);
	}
}
