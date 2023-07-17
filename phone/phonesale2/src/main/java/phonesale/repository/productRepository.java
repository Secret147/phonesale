package phonesale.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import phonesale.entity.productEntity;

public interface productRepository extends JpaRepository<productEntity, Long>{
	List<productEntity> findByType(String type);
	List<productEntity> findByName(String name);

}
