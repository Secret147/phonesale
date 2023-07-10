package phonesale.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import phonesale.entity.cartEntity;

public interface cartRepository extends JpaRepository<cartEntity, Long>{

}
