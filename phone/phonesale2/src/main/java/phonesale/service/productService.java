package phonesale.service;

import java.text.Normalizer;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import phonesale.converter.productConverter;
import phonesale.dto.productDTO;
import phonesale.entity.customerEntity;
import phonesale.entity.productEntity;
import phonesale.repository.customerRepository;
import phonesale.repository.productRepository;

@Service
public class productService {
	@Autowired
	private productRepository productRe;
	private productConverter productCo;
	
	@Autowired
	private customerRepository customerRe;

	public List<productDTO> findAllPage(Pageable pageble){
		List<productDTO> results = new ArrayList<>();
		List<productEntity> entities = productRe.findAll(pageble).getContent();
		for ( productEntity item : entities) {
			productDTO product = productCo.toproductDTO(item);
			results.add(product);
		}
		return results;
	}
	public List<productEntity> searchProducts(String keyword) {
        String normalizedKeyword = StringUtils.hasText(keyword) ? normalizeText(keyword) : "";
        List<productEntity> allProductnull = new ArrayList<>();
        List<productEntity> allProducts = productRe.findAll();
        if(keyword != "") {
        return allProducts.stream()
                .filter(product -> normalizeText(product.getName()).contains(normalizedKeyword))
                .collect(Collectors.toList());
        }
        else {
        	return allProductnull;
        }
    }

    private String normalizeText(String text) {
        return StringUtils.hasText(text) ? Normalizer.normalize(text, Normalizer.Form.NFD)
                .replaceAll("\\p{M}", "")
                .toLowerCase() : "";
    }

}
